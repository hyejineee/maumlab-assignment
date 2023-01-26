import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import _ from 'lodash';
import Menu from './Menu';
import * as S from './Layout.styles';
import { ArrowLeftOutlined } from '@ant-design/icons';

const HIDDEN_MENU_PAGE = [
  '/auth/login',
  '/auth/register',
  '/chat/create',
  '/chat/[chatRoomId]',
];

const SHOW_HEADER = ['/auth/register', '/chat/create', '/chat/[chatRoomId]'];

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleClickBackArrow = () => {
    router.back();
  };

  return (
    <S.Wrapper>
      {_.includes(HIDDEN_MENU_PAGE, router.pathname) || (
        <S.MenuWrapper>
          <Menu />
        </S.MenuWrapper>
      )}

      <S.Container>
        {_.includes(SHOW_HEADER, router.pathname) && (
          <S.HeaderWrapper>
            <button type='button' onClick={handleClickBackArrow}>
              <ArrowLeftOutlined />
            </button>
          </S.HeaderWrapper>
        )}
        <S.ContentsWrapper>{children}</S.ContentsWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
