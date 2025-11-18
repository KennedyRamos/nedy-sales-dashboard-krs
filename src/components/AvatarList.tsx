import { Avatar, Box } from '@mui/material'
import { StyledH2, StyledSpan } from '@/components'
import { pxToRem } from '@/utils'
import type { AvatarListProps } from '@/types'

export default function AvatarsList(props: AvatarListProps) {
  return (
    <>
        {
            props.listData.map((item, index) => (
                <Box sx={{
                    display:'flex',
                    alignItems: 'center',
                    padding: `${pxToRem(12)} 0`,
                    key: {index}
                }}>
                    <Box>
                        <Avatar 
                        alt={item.name}
                        src={item.avatar}
                        sx={{
                            width: pxToRem(48),
                            height: pxToRem(48),
                            margin: pxToRem(5)
                        }}/>
                    </Box>

                    <Box>
                        <StyledH2>{item.name}</StyledH2>
                        <StyledSpan>{item.subtitle}</StyledSpan>
                    </Box>

                </Box>
            ))
        }
    </>
  ) 
}
