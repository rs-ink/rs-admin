import React from 'react';
import {storiesOf} from '@storybook/react';
import SearchBar from 'components/SearchBar';
import AddPost from "../../components/AddPost";

storiesOf('组件', module)
    .add('SearchBar', () => <SearchBar />);

storiesOf("组件",module)
.add("AddPost",()=><AddPost />)
