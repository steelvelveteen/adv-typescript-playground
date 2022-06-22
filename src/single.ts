export default class Person {
	firstName: string;
	lastName: string;
	logPersonDetails = (): void => 
 console.log(`Full Name: ${person.firstName} ${person.lastName}`)
}

class StandardMessage {
	static WelcomeMessage = (): void => console.log('Welcome to SRP lesson from static');
}

StandardMessage.WelcomeMessage();

const person:Person = new Person();
person.firstName = 'Joey';
person.lastName = 'Vico';

person.logPersonDetails();
