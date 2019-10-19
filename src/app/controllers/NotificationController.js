import User from '../models/User';
import Notifications from '../schemas/notifications';

class NotificationController {
  async index(req, res) {
    const isProvider = await User.findOne({
      where: {
        id: req.userId,
        provider: true,
      },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'Only provider can load notifications' });
    }

    const notificationsList = await Notifications.find({
      user: req.userId,
    })
      .sort({ createdAt: -1 })
      .limit(20);

    return res.json(notificationsList);
  }

  async update(req, res) {
    const notification = await Notifications.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    return res.json(notification);
  }
}

export default new NotificationController();
