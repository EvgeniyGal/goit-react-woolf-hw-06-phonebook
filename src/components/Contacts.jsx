import { useSelector } from 'react-redux';
import Contact from './ContactItem';
import { filterSelector, phoneBookSelector } from 'store/selectors';

export default function Contacts() {
  const { filter } = useSelector(filterSelector);
  const { phoneBook } = useSelector(phoneBookSelector);

  const filteredPhoneBook = filter
    ? phoneBook.filter(
        ({ name }) =>
          name.slice(0, filter.length).toLowerCase() === filter.toLowerCase()
      )
    : phoneBook;

  return (
    <div className="mt-5 flex flex-col gap-5 w-full px-5">
      <ul className="flex flex-col gap-3">
        {filteredPhoneBook.map(phone => (
          <Contact key={phone.id} data={phone} />
        ))}
      </ul>
    </div>
  );
}
