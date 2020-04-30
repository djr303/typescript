enum ColorsEnum {
  white = '#ffffff',
  black = '#000000',
}

type Colors = keyof typeof ColorsEnum;
