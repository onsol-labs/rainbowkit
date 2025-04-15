import { type JSX } from 'react';
interface ProfileDetailsActionProps {
    label: string;
    action?: (() => void) | ((address: string) => void);
    icon: JSX.Element;
    url?: string;
    testId?: string;
    address?: string;
}
export declare function ProfileDetailsAction({ action, icon, label, testId, url, address }: ProfileDetailsActionProps): JSX.Element;
export {};
