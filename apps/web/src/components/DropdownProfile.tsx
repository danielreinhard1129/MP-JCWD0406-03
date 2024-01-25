'use client';

import { useKeepLogin } from '@/hooks/auth/useKeepLogin';
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
  const handleLogout = async () => {
    dispatch(LogoutAction());
    router.push('/')
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
      <Dropdown.Header className="bg-white">
        <span className="block text-base font-medium">
          {selector?.firstName} {selector?.lastName}
        </span>
        <span className="block truncate text-sm font-medium">
          {selector?.email}
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
