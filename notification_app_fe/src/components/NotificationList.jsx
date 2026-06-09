import NotificationCard from "./NotificationCard";

function NotificationList() {
  const notifications = [
    "Assignment Submitted",
    "Profile Updated",
    "New Message Received",
  ];

  return (
    <div>
      {notifications.map((item, index) => (
        <NotificationCard key={index} message={item} />
      ))}
    </div>
  );
}

export default NotificationList;