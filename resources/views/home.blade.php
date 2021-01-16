@extends('layouts.app')

@section('content')
    @auth
        <v-index user="{{ Auth::user() }}"></v-index>
    @else
        <v-index user="null"></v-index>
    @endauth    
@endsection