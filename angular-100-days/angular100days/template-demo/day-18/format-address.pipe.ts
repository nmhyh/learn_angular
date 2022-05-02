import { Pipe, PipeTransform } from "@angular/core";

interface AddressLike {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
@Pipe({
  name: 'formatAddress',
})
export class FormatAddressPipe implements PipeTransform {
  transform(value: AddressLike, param1?: string) {
    console.log('pipe run', value, param1);
    return value.address1 + ' ' + value.address2
    + ' ' + value.city + ' ' + value.state
    + ' ' + value.zip + ' ' + value.country;
  }
}
