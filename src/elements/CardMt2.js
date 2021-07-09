import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from './Grid';
import Text from "./Text";

const CardMt2 = (props) => {

    return (
        <React.Fragment>
            <Card variant="outlined">
        <CardContent>
            <Grid is_flex space="space-between">
            <Typography variant="h6" component="h1">
            QnA
            </Typography>
            <Button size="small">더보기</Button>
            </Grid>

            <Grid>
            <hr />
            <br />

            <Grid is_flex>

            <Typography color="textSecondary"  variant="body2" component="p">
            카테고리
            </Typography>
            
            <Typography variant="body3" component="p">
            플렉스 어떻게 줘요..?
            </Typography>

            <Typography color="textSecondary"  variant="body2" component="p">
                2021-07-10
            </Typography>

            </Grid>

            <br />
            </Grid>

            <Grid>
            <hr />
            <br />

            <Grid is_flex>

            <Typography color="textSecondary"  variant="body2" component="p">
            카테고리
            </Typography>
            
            <Typography variant="body3" component="p">
            플렉스 어떻게 줘요..?
            </Typography>

            <Typography color="textSecondary"  variant="body2" component="p">
                2021-07-10
            </Typography>

            </Grid>

            <br />
            </Grid>

            <Grid>
            <hr />
            <br />

            <Grid is_flex>

            <Typography color="textSecondary"  variant="body2" component="p">
            카테고리
            </Typography>
            
            <Typography variant="body3" component="p">
            플렉스 어떻게 줘요..?
            </Typography>

            <Typography color="textSecondary"  variant="body2" component="p">
                2021-07-10
            </Typography>

            </Grid>

            <br />
            </Grid>

            
            
        </CardContent>
        
        <CardActions>
        
         </CardActions>
        </Card>
        </React.Fragment>
    )
}

export default CardMt2;