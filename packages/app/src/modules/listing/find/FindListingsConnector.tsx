import React from 'react';
import { SearchListings } from '@abb/controller';
import { Card, Slider } from 'react-native-elements';
import { FlatList, Text, TextInput, SafeAreaView, View, Button } from 'react-native';

interface State {
  name: string;
  guests: number;
  beds: number;
}

export class FindListingsConnector extends React.PureComponent<{}, State> {
  state = {
    name: '',
    guests: 1,
    beds: 1,
  };

  render() {
    const { name, guests, beds } = this.state;
    return (
      <>
        <SafeAreaView />
        <TextInput
          style={{ fontSize: 20, width: '100%' }}
          placeholder="search..."
          onChangeText={(text) => this.setState({ name: text })}
          value={name}
        />
        <View style={{ alignItems: 'stretch', justifyContent: 'center' }}>
          <Slider
            value={guests}
            step={1}
            maximumValue={5}
            onValueChange={(value) => this.setState({ guests: value })}
          />
          <Text>Guests: {guests}</Text>
        </View>
        <View style={{ alignItems: 'stretch', justifyContent: 'center' }}>
          <Slider
            value={beds}
            step={1}
            maximumValue={5}
            onValueChange={(value) => this.setState({ beds: value })}
          />
          <Text>Beds: {beds}</Text>
        </View>
        <SearchListings variables={{ input: { name }, limit: 5, offset: 0 }}>
          {({ listings, hasMoreListings, loadMore }) => (
            <FlatList
              ListFooterComponent={() =>
                hasMoreListings ? <Button title="load more" onPress={loadMore} /> : <View />
              }
              data={listings}
              keyExtractor={({ id }) => `${id}-flc`}
              renderItem={({ item: l }) => (
                <Card title={l.name} image={l.pictureUrl ? { uri: l.pictureUrl } : undefined}>
                  <Text style={{ marginBottom: 10 }}>owner: {l.owner.email}</Text>
                </Card>
              )}
            />
          )}
        </SearchListings>
      </>
    );
  }
}
