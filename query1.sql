use `letterboxDB`;
create table user (
	user_code int auto_increment,
    id long,
    platform varchar(128),
    profile_img varchar(128),
    nickname varchar(128),
    email varchar(128),
    user_role varchar(128),
    create_time timestamp default current_timestamp,
	primary key(user_code)
);

create table letterBox (
	letterbox_id int auto_increment,
	owner int,
	name varchar(128),
    primary key(letterbox_id),
    foreign key(owner) references user(user_code)
);

create table letter (
	letter_id int auto_increment,
    letterbox int,
    user int,
    name varchar(128),
    nickname varchar(128),
    hint1 varchar(1000),
    hint2 varchar(1000),
    hint3 varchar(1000),
    phone varchar(512),
    content varchar(1000),
    photo longblob,
    created_at timestamp,
    primary key(letter_id),
    foreign key(user) references user(user_code),
    foreign key(letterbox) references letterBox(letterbox_id)
);

create table files (
	file_id int auto_increment,
    filename varchar(512),
    fileoriname varchar(512),
    fileurl varchar(512),
    primary key(file_id)
);

alter table letterboxDB.letter add file int;
alter table letterboxDB.letter add foreign key(file) references files(file_id);
alter table letterboxDB.letter drop column photo;
alter table letterboxDB.letter add create_time timestamp default current_timestamp;
alter table letterboxDB.letter drop column created_at;
alter table letterboxDB.letterBox add create_time timestamp default current_timestamp;
create table letter_list (
	letterlist_id int auto_increment,
    l0 boolean,
    l1 boolean,
    l2 boolean,
    l3 boolean,
    l4 boolean,
    l5 boolean,
    l6 boolean,
    l7 boolean,
    l8 boolean,
    l9 boolean,
    l10 boolean,
    l11 boolean,
    l12 boolean,
    l13 boolean,
    l14 boolean,
    l15 boolean,
    l16 boolean,
    l17 boolean,
    l18 boolean,
    l19 boolean,
    l20 boolean,
    l21 boolean,
    l22 boolean,
    l23 boolean,
    l24 boolean,
    l25 boolean,
    l26 boolean,
    l27 boolean,
    l28 boolean,
    l29 boolean,
    l30 boolean,
    l31 boolean,
    l32 boolean,
    l33 boolean,
    l34 boolean,
    l35 boolean,
    l36 boolean,
    l37 boolean,
    l38 boolean,
    l39 boolean,
    l40 boolean,
    l41 boolean,
    l42 boolean,
    l43 boolean,
    l44 boolean,
    l45 boolean,
    l46 boolean,
    l47 boolean,
    primary key(letterlist_id)
);

DELETE FROM letterboxDB.letter where letter_id < 100;
DELETE FROM letterboxDB.letter_box where letterbox_id < 100;
DELETE FROM letterboxDB.user where user_code < 100;