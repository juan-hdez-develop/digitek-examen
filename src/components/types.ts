
export type Contact = {
    index?: number | null;
    name: string,
    phone: string,
    email: string,
    date: string
}
export type onClickContactHandler = (contact: Contact)  => void
export type onClickHandler = ()  => void

export const initialState: Contact = {
    index: null,
    name: '',
    phone: '',
    email: '',
    date: ''
}