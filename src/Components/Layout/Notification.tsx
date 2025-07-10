interface NotificationProps {
  icon?: string;
  text?: string;
}
const Notification = ({ icon, text }: NotificationProps) => (
  <div className="flex items-center gap-2">
    {typeof icon === "string" ? (
      <img src={icon} alt="" className="h-4 w-4 object-contain" />
    ) : (
      icon
    )}
    {text && <span className="text-sm font-medium text-text6 Inter">{text}</span>}
  </div>
);
export default Notification;
