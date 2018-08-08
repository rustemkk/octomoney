import { Schema } from 'normalizr';


const accountSchema = new Schema('accounts', { idAttribute: 'id' });


export default { accountSchema };
