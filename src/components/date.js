import {parseISO, format} from 'date-fns';

//Описание того как должно выглядеть отображение даты
export default function Date({dateString}) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}