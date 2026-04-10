import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userExportService } from '../services/userExportService.js';
import '../styles/AdminPanel.css';

export default function AdminPanel() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userCount, setUserCount] = useState(0);
  const [downloadFormat, setDownloadFormat] = useState('csv');
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const csv = await userExportService.generateUserCSV();
      const lines = csv.split('\n').slice(1).filter(line => line.trim());
      setUsers(lines.length);
      
      const count = await userExportService.getUserCount();
      setUserCount(count);
    } catch (error) {
      console.error('Error loading users:', error);
      setMessage('Error loading user data');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      setMessage('Preparing download...');
      
      if (downloadFormat === 'csv') {
        await userExportService.downloadAsCSV();
        setMessage('✅ CSV file downloaded successfully!');
      } else if (downloadFormat === 'txt') {
        await userExportService.downloadAsText();
        setMessage('✅ Text file downloaded successfully!');
      } else if (downloadFormat === 'json') {
        await userExportService.downloadAsJSON();
        setMessage('✅ JSON file downloaded successfully!');
      }

      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error downloading:', error);
      setMessage('❌ Error downloading file');
    }
  };

  const handleViewDetails = async () => {
    try {
      const json = await userExportService.generateUserJSON();
      const data = JSON.parse(json);
      
      // Show in alert (for small data)
      if (data.users.length === 0) {
        setMessage('No users found');
      } else {
        setMessage(`Showing ${data.users.length} users - see console for details`);
        console.table(data.users);
      }
    } catch (error) {
      console.error('Error viewing details:', error);
      setMessage('Error viewing user details');
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-card">
        <div className="admin-header">
          <h1>📊 User Management Panel</h1>
          <p>View and export user account details</p>
        </div>

        {loading ? (
          <div className="loading">Loading user data...</div>
        ) : (
          <>
            <div className="stats-section">
              <div className="stat-box">
                <h3>Total Users</h3>
                <p className="stat-number">{userCount}</p>
              </div>
              <div className="stat-box">
                <h3>Status</h3>
                <p className="stat-number" style={{ color: userCount > 0 ? '#10b981' : '#ef4444' }}>
                  {userCount > 0 ? 'Active' : 'No Users'}
                </p>
              </div>
              <div className="stat-box">
                <h3>Last Updated</h3>
                <p className="stat-number" style={{ fontSize: '12px' }}>
                  {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>

            <div className="export-section">
              <h2>📥 Export User Data</h2>
              
              <div className="format-selector">
                <label>Choose Export Format:</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      value="csv"
                      checked={downloadFormat === 'csv'}
                      onChange={(e) => setDownloadFormat(e.target.value)}
                    />
                    CSV (Excel compatible) 📊
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="txt"
                      checked={downloadFormat === 'txt'}
                      onChange={(e) => setDownloadFormat(e.target.value)}
                    />
                    Text File (.txt) 📄
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="json"
                      checked={downloadFormat === 'json'}
                      onChange={(e) => setDownloadFormat(e.target.value)}
                    />
                    JSON (.json) 🔧
                  </label>
                </div>
              </div>

              <div className="button-group">
                <button 
                  className="btn btn-primary"
                  onClick={handleDownload}
                  disabled={userCount === 0}
                >
                  📥 Download as {downloadFormat.toUpperCase()}
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={handleViewDetails}
                  disabled={userCount === 0}
                >
                  👁️ View Details (Console)
                </button>
                <button 
                  className="btn btn-tertiary"
                  onClick={loadUsers}
                >
                  🔄 Refresh
                </button>
              </div>
            </div>

            {message && (
              <div className={`message ${message.includes('✅') ? 'success' : message.includes('❌') ? 'error' : 'info'}`}>
                {message}
              </div>
            )}

            <div className="info-section">
              <h3>📋 What Gets Exported?</h3>
              <ul>
                <li>✅ Email address</li>
                <li>✅ Password</li>
                <li>✅ User ID (UID)</li>
                <li>✅ Full Name (if registered)</li>
                <li>✅ Date of Birth (if provided)</li>
                <li>✅ Account Creation Date</li>
                <li>✅ Registration Date (if registered)</li>
              </ul>
            </div>

            <div className="format-info">
              <h3>📝 Format Details</h3>
              
              <div className="format-detail">
                <h4>CSV Format (Excel)</h4>
                <p>📊 Open with: Microsoft Excel, Google Sheets, any spreadsheet app</p>
                <p>✅ Best for: Data analysis, organizing in spreadsheets</p>
                <p>✅ File name: PrepX_Users_YYYY-MM-DD.csv</p>
              </div>

              <div className="format-detail">
                <h4>Text Format (.txt)</h4>
                <p>📄 Open with: Notepad, Word, any text editor</p>
                <p>✅ Best for: Quick viewing, human-readable format</p>
                <p>✅ File name: PrepX_Users_YYYY-MM-DD.txt</p>
              </div>

              <div className="format-detail">
                <h4>JSON Format (.json)</h4>
                <p>🔧 Open with: Code editors, specialized JSON viewers</p>
                <p>✅ Best for: Programming, data integration, APIs</p>
                <p>✅ File name: PrepX_Users_YYYY-MM-DD.json</p>
              </div>
            </div>

            <div className="security-note">
              <h3>🔐 Security Note</h3>
              <p>
                These files contain sensitive information (emails and passwords).
                Keep them secure and don't share with others.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
