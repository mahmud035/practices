interface IWeatherProps {
  temperature: number;
}

export default function Weather({ temperature }: IWeatherProps) {
  // let content = '';

  // if (temperature < 15) content = 'Its cold outside!';
  // else if (temperature >= 15 && temperature < 25) content = 'Its nice outside!';
  // else content = 'Its hot outside!';

  const content =
    temperature < 15
      ? 'Its cold outside!'
      : temperature >= 15 && temperature < 25
      ? 'Its nice outside!'
      : 'Its hot outside!';

  return <div>{content}</div>;
}
