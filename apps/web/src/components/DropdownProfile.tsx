'use client';

<<<<<<< HEAD
=======
import { useKeepLogin } from '@/hooks/auth/useKeepLogin';
>>>>>>> 4ea1091d4d5ae3582affc73549e522ebbe582b92
import { LogoutAction } from '@/lib/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Avatar, Dropdown } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { CgProfile } from 'react-icons/cg';
import { IoIosLogOut } from 'react-icons/io';

const DropdownProfile = () => {
  const router = useRouter();
  const selector = useAppSelector((state) => state.user.dataUser);
  const dispatch = useAppDispatch();
<<<<<<< HEAD
  const handleLogout = () => {
    if (selector.data.role.name === 'promoter') {
=======
  const handleLogout = async() => {
    if (selector.role === 'promoter') {
>>>>>>> 4ea1091d4d5ae3582affc73549e522ebbe582b92
      router.push('/promoters/join');
    }
    dispatch(LogoutAction());
  };
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <Avatar
          className="border-2 rounded-full"
          alt="User settings"
          img={''}
          rounded
        />
      }
    >
      <Dropdown.Header>
        <span className="block text-base">
<<<<<<< HEAD
          {selector.data?.firstName} {selector.data?.lastName}
        </span>
        <span className="block truncate text-sm font-medium">
          {selector.data?.email}
=======
          {"a"}
        </span>
        <span className="block truncate text-sm font-medium">
          {""}
>>>>>>> 4ea1091d4d5ae3582affc73549e522ebbe582b92
        </span>
      </Dropdown.Header>
      <Dropdown.Item icon={CgProfile}>Profile</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item icon={IoIosLogOut} onClick={() => handleLogout()}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownProfile;
