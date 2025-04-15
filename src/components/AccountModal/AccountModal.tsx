import React, { useContext } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { useProfileMulti } from '../../hooks/useProfile';
import { Dialog } from '../Dialog/Dialog';
import { DialogContent } from '../Dialog/DialogContent';
import { ProfileDetails } from '../ProfileDetails/ProfileDetails';
import { useViewProfileData } from '../RainbowKitProvider/ModalContext';

export interface AccountModalProps {
  open: boolean;
  onClose: () => void;
}

export function AccountModal({ onClose, open }: AccountModalProps) {
  const { address } = useAccount();
  const { balance, ensAvatar, ensName } = useProfileMulti({
    address,
    includeBalance: open,
  });
  const { disconnect } = useDisconnect();
  const { viewProfileAction } = useViewProfileData(); // Retrieve custom action

  if (!address) {
    return null;
  }

  const titleId = 'rk_account_modal_title';

  return (
    <>
      {address && (
        <Dialog onClose={onClose} open={open} titleId={titleId}>
          <DialogContent bottomSheetOnMobile padding="0">
            <ProfileDetails
              address={address}
              ensAvatar={ensAvatar}
              ensName={ensName}
              balance={balance}
              onClose={onClose}
              onDisconnect={disconnect}
              viewProfileAction={viewProfileAction} // Pass custom action
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
