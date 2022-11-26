import dayjs from 'dayjs';
import ReactSelect from 'react-select';
import './Data.css';

export default function DateSelector() {
  const today = dayjs();
  const tomorrow = today.add(1, 'day');

  const ListOfDates = [
    today,
    tomorrow,
    tomorrow.add(1, 'day'),
    tomorrow.add(2, 'day'),
    tomorrow.add(3, 'day'),
    tomorrow.add(4, 'day'),
    tomorrow.add(5, 'day'),
  ];

  return (
    <div>
      <ReactSelect
        className="DateSelector"
        options={ListOfDates}
        placeholder="Выберите Дату"
        getOptionValue={(option) => option.format('')}
        getOptionLabel={(date) => (
          <>
            <p>{date.isSame(today) && 'Сегодня'}</p>
            <p>{date.isSame(tomorrow) && 'Завтра'}</p>
            <p>{date.isAfter(tomorrow) && date.format('DD.MM.YYYY')}</p>
          </>
        )}
      />
    </div>
  );
}