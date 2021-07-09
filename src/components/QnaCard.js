import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '../elements/Grid';
import Text
 from '../elements/Text';
const QnaCard = (props) => {

    return (
        <React.Fragment>
            <Card variant="outlined">
        <CardContent>
            <Grid is_flex space="space-between">
            <Text size="22px" weight="bold" margin="5px 10px">리액트 질문 있어요!</Text>
            <Text margin="5px 10px">2021-07-10</Text>
            </Grid>
            <Grid margin="50px 0">
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</Text>
            </Grid>
            
            <Grid is_flex space="space-between" padding="0 30px">
                <Text>작성자 : 박준영</Text>
                <Text>댓글 : 10개</Text>
                <Button>자세히 보기</Button>
            </Grid>
            
            
        </CardContent>
        
        <CardActions>
        
         </CardActions>
        </Card>
        </React.Fragment>
    )
}

export default QnaCard;