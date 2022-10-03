import { ValidationArguments } from 'class-validator';
export const lengthMessageError = (isMin = false) => {
  return (validationArguments: ValidationArguments) => {
    let legthMesssage = 'longue';
    let legthTypeMesssage = 'maximale';
    if (isMin) {
      legthMesssage = 'courte';
      legthTypeMesssage = 'minimale';
    }
    return `La taille de votre ${validationArguments.property} ${validationArguments.value} est ${legthMesssage}, la taille ${legthTypeMesssage} de ${validationArguments.property} est ${validationArguments.constraints[0]}`;
  };
};
