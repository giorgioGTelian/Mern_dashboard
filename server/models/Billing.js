import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const { Schema } = mongoose;

const billSchema = new Schema({
    id: {
        type: String,
        default: () => uuidv4()
    },
    amount: Number,
    date: Date,
    status: {
        type: String,
        enum: ['Pagato', 'Non Pagato', 'In Attesa di Pagamento', 'Pagamento Confermato', 'Pagamento Rifiutato', 'Pagamento Annullato', 'Pagamento Scaduto', ],
        default: 'Non Pagato'
    },
});

export const Bill = mongoose.model('Bill', billSchema);
export default Bill;
