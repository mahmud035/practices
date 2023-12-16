a = {
    "name": "Mahmudul Hasan",
    "nickname": "Pavel",
    "mobile": "01986870460",
}
print(type(a))

#  Access item from a dictionary
#  Syntax: dictionary_name['key']
print(a["name"])
print(a["nickname"])
print(a["mobile"])

#  UPDATE dictionary
#  Syntax: dictionary_name['key'] = ['value']
a["age"] = ["25"]  # type: ignore
print(a)

b = {
    "hometown": "Gopalganj",
    "family_members": "6",
}
a.update(b)
print("After update:", a)

#  REMOVE item from a dictionary
#  Syntax: del dictionary_name['key']
del a["mobile"]
print(a)


# Implementing some Function(method)
#  copy()
a = {
    "name": "Mahmudul Hasan",
    "nickname": "Pavel",
    "mobile": "01986870460",
}
print(a.copy())

#  get(key, default=None)
print(a.get("name"))
print(a.get("home"))

#  has_key(key)
print("name" in a)
print("home" in a)

#  items()
print(a.items())

#  keys()
print(a.keys())

#  values()
print(a.values())

print("Hello ")
