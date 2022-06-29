import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { VFC } from 'react';

const RemarksAccordion: VFC<{
  remarks: string;
}> = ({ remarks }) => (
  <>
    {remarks ? (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelRemarks-content"
          id="panelRemarks-header"
        >
          <Typography>備考</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {remarks.split('\n').map((r) => (
              <>
                {r}
                <br />
              </>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ) : (
      <Accordion disabled>
        <AccordionSummary
          aria-controls="panelNonRemarks-content"
          id="panelNonRemarks-header"
        >
          <Typography>備考 なし</Typography>
        </AccordionSummary>
      </Accordion>
    )}
  </>
);

export default RemarksAccordion;
