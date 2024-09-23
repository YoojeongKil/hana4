import { FaTrashCan } from 'react-icons/fa6';
import { Session } from '../App.tsx';
import Login from './Login.tsx';
import Profile from './Profile.tsx';
import Button from './atoms/Button.tsx';
import { useRef } from 'react';

type Props = {
  session: Session;
  logout: () => void;
  login: (id: number, name: string) => void;
  removeCartItem: (id: number) => void;
};

export default function My({ session, logout, login, removeCartItem }: Props) {
  const logoutButtonRef = useRef<HTMLButtonElement>(null);

  const removeItem = (id: number) => {
    if (confirm('Are u sure?')) {
      removeCartItem(id);
    }
  };

  return (
    <>
      {session.loginUser ? (
        <>
          <Profile session={session} logout={logout} ref={logoutButtonRef} />
          <Button
            onClick={() => logoutButtonRef.current?.focus()}
            text='MySignOut'
          />
        </>
      ) : (
        <Login login={login} />
      )}

      <ul className='my-3 w-1/2 border p-3'>
        {session.cart?.length ? (
          session.cart.map(({ id, name, price }) => (
            <li key={id} className='flex justify-between'>
              <strong>
                {id}. {name}
                <small className='font-light text-gray-500'>
                  {price.toLocaleString()}원
                </small>
              </strong>
              <button
                onClick={() => removeItem(id)}
                className='btn btn-danger px-1 py-0'
              >
                <FaTrashCan />
              </button>
            </li>
          ))
        ) : (
          <li className='text-slate-500'>There is no items.</li>
        )}
      </ul>
    </>
  );
}
