import React, { type JSX } from 'react';
import { touchableStyles } from '../../css/touchableStyles';
import { isMobile } from '../../utils/isMobile';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

interface ProfileDetailsActionProps {
  label: string;
  action?: (() => void) | ((address: string) => void); // Fixed parenthesis for union type
  icon: JSX.Element;
  url?: string;
  testId?: string;
  address?: string;
}

export function ProfileDetailsAction({
  action,
  icon,
  label,
  testId,
  url,
  address
}: ProfileDetailsActionProps) {
  const mobile = isMobile();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (typeof action === 'function') {
      if (action.length === 0) {
        if (address) {action(address)} else {action}
      } else {
        action(''); // Pass an empty string as the address (or replace with actual address if available)
      }
    }
  };

  return (
    <Box
      {...(url
        ? { as: 'a', href: url, rel: 'noreferrer noopener', target: '_blank' }
        : { as: 'button', type: 'button' })}
      background={{
        base: 'profileAction',
        ...(!mobile ? { hover: 'profileActionHover' } : {}),
      }}
      borderRadius="menuButton"
      boxShadow="profileDetailsAction"
      className={touchableStyles({
        active: 'shrinkSm',
        hover: !mobile ? 'grow' : undefined,
      })}
      display="flex"
      onClick={handleClick}
      padding={mobile ? '6' : '8'}
      style={{ willChange: 'transform' }}
      testId={testId}
      transition="default"
      width="full"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        gap="1"
        justifyContent="center"
        paddingTop="2"
        width="full"
      >
        <Box color="modalText" height="max">
          {icon}
        </Box>
        <Box>
          <Text color="modalText" size={'12'} weight="semibold">
            {label}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
