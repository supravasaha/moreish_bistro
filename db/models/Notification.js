import  mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    },
});

class NotificationModel {
    constructor() {
        this.model = mongoose.model('Notification', notificationSchema);
    }

    getModel() {
        return this.model;
    }
}

export default new NotificationModel().getModel();
