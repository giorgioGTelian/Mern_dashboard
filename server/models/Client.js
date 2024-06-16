import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import billings from './Billing.js';

const { Schema } = mongoose;

const clientSchema = new Schema({
    id: {
        type: String,
        default: () => uuidv4()
    },
    name: String,
    phoneNumberClient: String,
    emailClient: String,
    clientDocuments: [Buffer],
    clientPayments: [String],
    clientBilling: [billings.schema],
    clientNotes: String,
});


export const Client = mongoose.model('Client', clientSchema);
export default Client;
