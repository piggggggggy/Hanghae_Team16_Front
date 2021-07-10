import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from './Grid';
import { Text } from '.';

const CardMt = (props) => {

    return (
        <React.Fragment>
            <Card variant="outlined">
        <CardContent>
            <Grid is_flex space="space-between">
            <Typography variant="h6" component="h1">
            스터디
            </Typography>
            <Button size="small">더보기</Button>
            </Grid>

            <Grid>
            <hr />
            <br />

            <Grid is_flex space="space-between">
                
            <Grid>
            <Typography color="textSecondary"  variant="body2" component="p">
            카테고리
            </Typography>
            
            <Typography variant="body3" component="p">
            리액트 스터디원 찾습니다.
            </Typography>
            </Grid>

            <Grid textalign="right"  padding="0 20px 0 0">
                <Text>
                2021-07-10 시작!
                </Text>
            </Grid>

            </Grid>
            <br />
            </Grid>

            <Grid>
            <hr />
            <br />

            <Grid is_flex space="space-between">
                
            <Grid>
            <Typography color="textSecondary"  variant="body2" component="p">
            카테고리
            </Typography>
            
            <Typography variant="body3" component="p">
            리액트 스터디원 찾습니다.
            </Typography>
            </Grid>

            <Grid textalign="right"  padding="0 20px 0 0">
                <Text>
                2021-07-10 시작!
                </Text>
            </Grid>

            </Grid>
            <br />
            </Grid>

            <Grid>
            <hr />
            <br />

            <Grid is_flex space="space-between">
                
            <Grid>
            <Typography color="textSecondary"  variant="body2" component="p">
            카테고리
            </Typography>
            
            <Typography variant="body3" component="p">
            리액트 스터디원 찾습니다.
            </Typography>
            </Grid>

            <Grid textalign="right"  padding="0 20px 0 0">
                <Text>
                2021-07-10 시작!
                </Text>
            </Grid>

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

export default CardMt;