import { VFC } from 'react';
import RemarksAccordion from '../../components/atoms/RemarksAccordion.component';

const EnhancedRemarksAccordion: VFC<{
  remarks: string;
}> = ({ remarks }) => <RemarksAccordion remarks={remarks} />;

export default EnhancedRemarksAccordion;
