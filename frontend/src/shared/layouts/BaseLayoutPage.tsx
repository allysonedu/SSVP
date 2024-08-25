import { Box, useMediaQuery, useTheme } from '@mui/material';
import { MenuSideBar } from '../components';

interface IBaseLayoutPageProps {
  children: React.ReactNode;
  toolbar?: React.ReactNode;
}

export const BaseLayoutPage: React.FC<IBaseLayoutPageProps> = ({
  children,
  toolbar,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MenuSideBar>
      <Box display="flex">
        {toolbar && <Box>{toolbar}</Box>}

        <Box marginLeft={smDown ? 2 : 0}>{children}</Box>
      </Box>
    </MenuSideBar>
  );
};
