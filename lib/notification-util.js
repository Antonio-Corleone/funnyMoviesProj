export default function NotificationHandler(status) {
  let notification = status;
  if (status === 'success') {
    notification = {
      status: 'success',
      title: 'Success',
      message: 'Your request was sent successfully'
    }
  };
  if (status === 'pending') {
    notification = {
      status: 'pending',
      title: 'Pending',
      message: 'Your request is still pending...'
    }
  }
  if (status === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: 'Your request sent failed'
    }
  }
  return notification;
}