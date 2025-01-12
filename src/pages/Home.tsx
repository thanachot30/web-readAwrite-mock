
import { Box, Container } from '@mui/material';
import ImageSlidView from '../component/ImageSlidView';
import Divider from '@mui/material/Divider';
import ImageGrid from '../component/ImageGrid';
import { Data_BoyLoveNovel, Data_GirlLoveNovel, Data_LoveNovel } from '../common/share';


const Home = () => {
    return (
        <Box>
            <Divider />
            < ImageSlidView />
            <Divider />

            <Container maxWidth="lg"
            >
                <Box sx={{ py: 3 }}>
                    <ImageGrid data={Data_LoveNovel} title={'นิยายรัก Love Novel'} name='LoveNovel' />
                    {/*  */}
                    <ImageGrid data={Data_BoyLoveNovel} title={'นิยายรัก Boy Love Novel'} name='BoyLoveNovel' />
                    {/*  */}
                    <ImageGrid data={Data_GirlLoveNovel} title={'นิยายรัก Girl Love Novel'} name='GirlLoveNovel' />
                </Box>

            </Container>
        </Box>

    )
}

export default Home