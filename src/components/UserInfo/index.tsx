import React from 'react';

import { Container, Profile, Avatar, UserData, MicIcon, HeadphoneIcon, SettingsIcon, Icons } from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Jubis</strong>
                    <span>#1234</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    );
}

export default UserInfo;