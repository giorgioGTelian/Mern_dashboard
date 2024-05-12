const { Box } = require('@mui/material');
const { Styled } = require('@mui/system');

const FlexBetween = Styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export default FlexBetween;