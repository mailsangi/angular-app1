export class CustomValidators {
  static creditCard(formControl) {
    const value = formControl.value;
    const pattern = /^(?:5[1-5][0-9]{14})$/;
    const result = pattern.test(value);
    console.log('Is Valid', result);
    if (result) {
      return null;
    } else {
      return {
        creditCard: true
      };
    }
  }
}
