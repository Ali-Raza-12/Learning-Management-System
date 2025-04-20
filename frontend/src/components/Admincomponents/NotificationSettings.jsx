import React, { useState } from 'react';
import Toggle from '../ui/Toggle';

const NotificationSettings: React.FC = () => {
  const [emailNotifications, setEmailNotifications] = useState({
    courseUpdates: true,
    announcements: true,
    assignments: true,
    discussionReplies: false,
    directMessages: true,
    gradingComplete: true,
    systemUpdates: false,
  });

  const [pushNotifications, setPushNotifications] = useState({
    courseUpdates: false,
    announcements: true,
    assignments: true,
    discussionReplies: false,
    directMessages: true,
    gradingComplete: false,
    systemUpdates: false,
  });

  const toggleEmailNotification = (key: keyof typeof emailNotifications) => {
    setEmailNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const togglePushNotification = (key: keyof typeof pushNotifications) => {
    setPushNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Notification Preferences</h3>
        <p className="mt-1 text-sm text-gray-500">
          Decide which notifications you'd like to receive and how you want to receive them.
        </p>
      </div>
      
      <div className="px-6 py-5">
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-4">Email Notifications</h4>
          <div className="space-y-3">
            <Toggle
              label="Course updates"
              description="Receive emails when courses are updated with new content"
              enabled={emailNotifications.courseUpdates}
              onChange={() => toggleEmailNotification('courseUpdates')}
            />
            <Toggle
              label="Announcements"
              description="Get notified about important announcements"
              enabled={emailNotifications.announcements}
              onChange={() => toggleEmailNotification('announcements')}
            />
            <Toggle
              label="Assignments"
              description="Receive emails about new assignments and deadlines"
              enabled={emailNotifications.assignments}
              onChange={() => toggleEmailNotification('assignments')}
            />
            <Toggle
              label="Discussion replies"
              description="Get notified when someone replies to your discussion post"
              enabled={emailNotifications.discussionReplies}
              onChange={() => toggleEmailNotification('discussionReplies')}
            />
            <Toggle
              label="Direct messages"
              description="Receive an email when you get a new direct message"
              enabled={emailNotifications.directMessages}
              onChange={() => toggleEmailNotification('directMessages')}
            />
            <Toggle
              label="Grading complete"
              description="Get notified when your assignments have been graded"
              enabled={emailNotifications.gradingComplete}
              onChange={() => toggleEmailNotification('gradingComplete')}
            />
            <Toggle
              label="System updates"
              description="Get emails about system maintenance and updates"
              enabled={emailNotifications.systemUpdates}
              onChange={() => toggleEmailNotification('systemUpdates')}
            />
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4">Push Notifications</h4>
          <div className="space-y-3">
            <Toggle
              label="Course updates"
              description="Receive push notifications when courses are updated with new content"
              enabled={pushNotifications.courseUpdates}
              onChange={() => togglePushNotification('courseUpdates')}
            />
            <Toggle
              label="Announcements"
              description="Get push notified about important announcements"
              enabled={pushNotifications.announcements}
              onChange={() => togglePushNotification('announcements')}
            />
            <Toggle
              label="Assignments"
              description="Receive push notifications about new assignments and deadlines"
              enabled={pushNotifications.assignments}
              onChange={() => togglePushNotification('assignments')}
            />
            <Toggle
              label="Discussion replies"
              description="Get push notified when someone replies to your discussion post"
              enabled={pushNotifications.discussionReplies}
              onChange={() => togglePushNotification('discussionReplies')}
            />
            <Toggle
              label="Direct messages"
              description="Receive a push notification when you get a new direct message"
              enabled={pushNotifications.directMessages}
              onChange={() => togglePushNotification('directMessages')}
            />
            <Toggle
              label="Grading complete"
              description="Get push notified when your assignments have been graded"
              enabled={pushNotifications.gradingComplete}
              onChange={() => togglePushNotification('gradingComplete')}
            />
            <Toggle
              label="System updates"
              description="Get push notifications about system maintenance and updates"
              enabled={pushNotifications.systemUpdates}
              onChange={() => togglePushNotification('systemUpdates')}
            />
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium rounded-md border border-transparent text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;