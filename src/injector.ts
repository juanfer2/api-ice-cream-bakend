import { useContainer as routeContainer } from "routing-controllers";
import { Container } from "typedi";
import { useContainer as typeOrmContainer } from "typeorm";
import { useContainer as validatorContainer, Validator } from "class-validator";

routeContainer(Container);
typeOrmContainer(Container);
validatorContainer(Container);
const validator = Container.get(Validator);
