import { FormControl } from '@angular/forms';

export function smallAndSpace(control: FormControl) {
    if (!control.value) return null; // no error

    if (/^[a-z ]+$/.test(control.value)) {
        return null;// no error
    } else {
        return { smallandspace: true };
    }
}