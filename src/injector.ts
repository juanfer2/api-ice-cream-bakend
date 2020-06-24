import { useContainer as routeContainer } from "routing-controllers";
import { Container } from "typedi";
import { useContainer as typeOrmContainer } from "typeorm";

routeContainer(Container);
typeOrmContainer(Container);
