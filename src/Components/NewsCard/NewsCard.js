import React from 'react'
import {Card, CardContent, CardMedia,Button,Typography, CardActions,CardActionArea} from '@material-ui/core'
import useStyles from './styles'

const NewsCard = ({article:{ description,publishedAt,source,urlToImage,title,url},i}) => {

    const classes = useStyles()
    return (
 <Card className={classes.card}>
     <CardActionArea href={url} target="_blank">
         <CardMedia className={classes.media} image={urlToImage || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nbcnews.com%2F&psig=AOvVaw09B_jgYsaCUJyb-SJ6KcKZ&ust=1599132459940000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjS-ueuyusCFQAAAAAdAAAAABAD'}/>
         <div className={classes.details}>
             <Typography variant="body2" component="h2" color="textSecondary">{(new Date(publishedAt)).toDateString()}</Typography>
             <Typography variant="body2" component="h2" color="textSecondary">{source.name}</Typography>
         </div>
         <Typography className={classes.title} variant="h5" gutterBottom>{title}</Typography>
    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
    </CardContent>
     </CardActionArea>
     <CardActions className={classes.cardActions}>
         <Button size="samll" color="primary">Learn More</Button>
         <Typography varaint="h5" color="textSecondary">{i+1}</Typography>
     </CardActions>
 </Card>
    )
}

export default NewsCard
