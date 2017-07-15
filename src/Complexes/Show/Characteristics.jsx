import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Characteristics = styled.section`
  padding-bottom: 2.5rem;
`;

const Heading = styled.h2`
  margin-top: 2.3rem;
  margin-bottom: 0;
  padding-bottom: 1.125rem;
  font-family: "Philosopher", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #3e4247;
`;

const ListItem = styled.dl`
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Key = styled.dt`
  margin-bottom: 0.7rem;
  flex: 0 0 50%;
  font-size: 1rem;
  color: #a9afb6;
  line-height: 1.38;
  font-weight: 400;
`;

const Value = styled.dd`
  margin-left: auto;
  text-align: left;
  flex: 0 0 50%;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.56;
  color: #3e4247;
`;

export default props =>
  (<Characteristics>
    <Grid>
      <Heading>Характеристики</Heading>
      <Row>
        <Col xs={4}>
          <ListItem>
            <Key>Количество квартир:</Key>
            <Value>{props.counter}</Value>
            <Key>Статус:</Key>
            <Value>{props.status}</Value>
            <Key>Цена:</Key>
            <Value>от {props.price.min} до {props.price.max} млн руб.</Value>
            <Key>Безопасность:</Key>
            <Value>{props.guard}</Value>
          </ListItem>
        </Col>
        <Col xs={4}>
          <ListItem>
            <Key>Конструкция корпусов:</Key>
            <Value>{props.comstruction}</Value>
            <Key>Площадь:</Key>
            <Value>от {props.totalArea.min} до {props.totalArea.max} м²</Value>
            <Key>Высота потолков:</Key>
            <Value>{props.ceilheight.min} - {props.ceilheight.max} м</Value>
            <Key>Обслуживание:</Key>
            <Value>{props.maintenanceCosts} руб / м² / месяц</Value>
          </ListItem>
        </Col>
        <Col xs={4}>
          <ListItem>
            <Key>Начало строительства:</Key>
            <Value>{props.startQuarter} квартал {props.startYear} года</Value>
            <Key>Конец строительства:</Key>
            <Value>{props.commissioningQuarter} квартал {props.commissioningYear} года</Value>
            <Key>Наземная парковка:</Key>
            <Value>{props.parkings}</Value>
            <Key>Подземная парковка:</Key>
            <Value>{props.undergroundGarages}</Value>
          </ListItem>
        </Col>
      </Row>
    </Grid>
  </Characteristics>);
