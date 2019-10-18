import * as Yup from 'yup';

import User from '../models/User';

class AppointmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(res.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { provider_id } = req.body;
    // const { provider_id, date } = req.body;

    /**
     * check if provid_id is provided
     */
    const isProvider = await User.findOne({
      where: {
        id: provider_id,
        provider: true,
      },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'Yoe can only create appintiments with providers' });
    }

    return res.json({ ok: true });
  }
}

export default new AppointmentController();
