import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import type { CardProps } from "../custom";

// Kann der Text des Buttons auch dynamisch übergeben werden?

export const CustomCards = () => {
  return (
    <div style={{ display: "flex" }}>
      <SingleCard
        title="LKW"
        subtitle="MAN"
        description="Der MAN LKW ist bekannt für seine Zuverlässigkeit und Effizienz."
      />
      <SingleCard
        subtitle="Volvo"
        description="Der Volvo LKW ist bekannt für seine Sicherheit und Komfort."
      />
      <SingleCard
        title="Wechselaufbauten"
        subtitle="Kipper"
        description="Der Kipper ist ein Wechselaufbau, der für den Transport von Schüttgütern geeignet ist."
      />
    </div>
  );
};

const SingleCard = ({ title, subtitle, description }: CardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {title}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {subtitle}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
