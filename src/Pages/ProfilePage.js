import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Label, List } from 'semantic-ui-react';
import url from '../urlHelper';

const ProfilePage = () => {
  const creds = JSON.parse(localStorage.getItem('trackerCreds'));
  const history = useHistory();

  const [cards, setCards] = useState([]);

  const deleteAccount = (e) => {
    e.preventDefault();
    fetch(`${url}/users/${creds.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${creds.jwt}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(() => localStorage.removeItem('trackerCreds'))
      .then(() => history.push('/'));
  };

  const getCards = () => {
    fetch(`${url}/collection/${creds.id}`)
      .then((resp) => resp.json())
      .then((data) => setCards(data));
  };

  useEffect(() => {
    getCards();
    // eslint-disable-next-line
  }, []);

  let ownedCards = cards.filter((card) => card.quantity > 0);

  return (
    <div style={{ textAlign: 'center', alignContent: 'center' }}>
      <h1>{creds.username}'s Profile</h1>
      <h3>Share your collection with this link!</h3>
      <h3>https://pokebook.shujaatazim.com/collection/{creds.id}</h3>
      <br />
      <div>
        <List verticalAlign='middle'>
          <List.Item>
            <Label>
              Base Set:{' '}
              {ownedCards.filter((card) => card.set === 'Base Set').length} /
              102
            </Label>
            <Label>
              Jungle Set:{' '}
              {ownedCards.filter((card) => card.set === 'Jungle').length} / 64
            </Label>
          </List.Item>
          <List.Item>
            <Label>
              Fossil Set:{' '}
              {ownedCards.filter((card) => card.set === 'Fossil').length} / 62{' '}
            </Label>
            <Label>
              Base Set 2:{' '}
              {ownedCards.filter((card) => card.set === 'Base Set 2').length} /
              130
            </Label>
          </List.Item>
          <List.Item>
            <Label>
              Team Rocket Set:{' '}
              {ownedCards.filter((card) => card.set === 'Team Rocket').length} /
              82
            </Label>
            <Label>
              Gym Heroes Set:{' '}
              {ownedCards.filter((card) => card.set === 'Gym Heroes').length} /
              132
            </Label>
          </List.Item>
          <List.Item>
            <Label>
              Gym Challenge Set:{' '}
              {ownedCards.filter((card) => card.set === 'Gym Challenge').length}{' '}
              / 132
            </Label>
            <Label>
              Neo Genesis Set:{' '}
              {ownedCards.filter((card) => card.set === 'Neo Genesis').length} /
              111
            </Label>
          </List.Item>
          <List.Item>
            <Label>
              Neo Discovery Set:{' '}
              {ownedCards.filter((card) => card.set === 'Neo Discovery').length}{' '}
              / 75
            </Label>
            <Label>
              Neo Revelations Set:{' '}
              {
                ownedCards.filter((card) => card.set === 'Neo Revelations')
                  .length
              }{' '}
              / 64
            </Label>
          </List.Item>
          <List.Item>
            <Label>
              Neo Destiny Set:{' '}
              {ownedCards.filter((card) => card.set === 'Neo Destiny').length} /
              105
            </Label>
            <Label>Total Cards: {ownedCards.length} / 1059</Label>
          </List.Item>
        </List>
      </div>
      <br />
      <br />
      <div>
        {creds.username !== 'Test' ? (
          <Button color='red' onClick={(e) => deleteAccount(e)}>
            Delete Account
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default ProfilePage;
