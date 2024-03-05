import Contacts from './Contacts';
import FormNewPhone from './FormNewPhone';
import Filter from './Filter';

export function App() {
  return (
    <div className="min-w-96 w-1/2 mx-auto flex flex-col items-center bg-stone-200  py-10 rounded-md">
      <h1 className="text-stone-700 text-6xl  font-bold text-center">
        Phonebook
      </h1>
      <FormNewPhone />
      <h2 className="text-3xl font-bold text-stone-700 mt-5">Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}
