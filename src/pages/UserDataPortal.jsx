import React, { useState, useEffect } from 'react';
import { userDataService } from '../services/userDataService.js';
import '../styles/UserDataPortal.css';

export default function UserDataPortal() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState({
    users: [],
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
    pageSize: 50,
    hasMore: false
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Load users on mount and when page changes
  useEffect(() => {
    loadUsers();
  }, [currentPage]);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await userDataService.getPaginatedUsers(currentPage, 50);
      setPageData(data);
      setMessage({ type: '', text: '' });
    } catch (error) {
      console.error('Error loading users:', error);
      setMessage({
        type: 'error',
        text: 'Failed to load users. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      setMessage({ type: 'loading', text: 'Generating CSV file...' });
      await userDataService.downloadAsCSV();
      setMessage({
        type: 'success',
        text: `✅ Downloaded! ${pageData.totalCount} users exported to CSV`
      });
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    } catch (error) {
      console.error('Error downloading:', error);
      setMessage({
        type: 'error',
        text: 'Failed to download file. Please try again.'
      });
    }
  };

  const handleRefresh = () => {
    setCurrentPage(1);
    loadUsers();
  };

  return (
    <div className="user-data-portal">
      {/* Header */}
      <div className="udp-header">
        <h1>📊 User Data Portal</h1>
        <p>View and manage all user accounts</p>
      </div>

      {/* Stats Bar */}
      <div className="udp-stats">
        <div className="stat-box">
          <div className="stat-label">Total Users</div>
          <div className="stat-value">{pageData.totalCount}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Current Page</div>
          <div className="stat-value">
            {pageData.currentPage} / {pageData.totalPages || 1}
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Showing</div>
          <div className="stat-value">
            {pageData.users.length}/{pageData.pageSize}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="udp-actions">
        <button
          className="btn btn-download"
          onClick={handleDownload}
          disabled={pageData.totalCount === 0}
          title={pageData.totalCount === 0 ? 'No users to download' : 'Download all users as CSV'}
        >
          📥 Download All as CSV
        </button>
        <button
          className="btn btn-refresh"
          onClick={handleRefresh}
          disabled={loading}
        >
          🔄 Refresh
        </button>
      </div>

      {/* Message Display */}
      {message.text && (
        <div className={`message message-${message.type}`}>
          {message.text}
        </div>
      )}

      {/* Users Table */}
      <div className="udp-table-container">
        {loading ? (
          <div className="loading">Loading users...</div>
        ) : pageData.users.length === 0 ? (
          <div className="empty-state">
            <h3>📭 No Users Yet</h3>
            <p>Sign up some users to see them here!</p>
          </div>
        ) : (
          <>
            <table className="udp-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>Account Created</th>
                  <th>Registered</th>
                </tr>
              </thead>
              <tbody>
                {pageData.users.map((user, index) => (
                  <tr key={user.uid} className={index % 2 === 0 ? 'even' : 'odd'}>
                    <td className="row-number">
                      {(pageData.currentPage - 1) * pageData.pageSize + index + 1}
                    </td>
                    <td className="email-cell">{user.email}</td>
                    <td className="password-cell">
                      <span className="password-masked">•••••••••</span>
                      <span className="password-actual">{user.password}</span>
                    </td>
                    <td>{user.name}</td>
                    <td>{user.dob}</td>
                    <td className="date-cell">{user.accountCreated}</td>
                    <td>
                      <span className={`badge ${user.registered === 'Yes' ? 'registered' : 'pending'}`}>
                        {user.registered}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="udp-pagination">
              <button
                className="btn btn-nav"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={pageData.currentPage === 1}
              >
                ← Previous
              </button>

              <div className="page-info">
                Page {pageData.currentPage} of {pageData.totalPages}
              </div>

              <button
                className="btn btn-nav"
                onClick={() => setCurrentPage(p => Math.min(pageData.totalPages, p + 1))}
                disabled={!pageData.hasMore}
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>

      {/* Info Section */}
      <div className="udp-info">
        <h3>📋 About This Portal</h3>
        <ul>
          <li>Shows up to 50 users per page</li>
          <li>Click "Download All as CSV" to export entire user database</li>
          <li>CSV file opens directly in Excel</li>
          <li>Password shown as dots for security (hover to see)</li>
          <li>Updates automatically when new users sign up</li>
          <li>Generated: {new Date().toLocaleString()}</li>
        </ul>
      </div>
    </div>
  );
}
