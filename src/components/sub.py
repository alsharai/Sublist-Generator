lst = []

def get_sub(s, combo):
    if len(s) == 0:
        lst.append(combo)
        return

    get_sub(s[1:], combo + s[0])
    get_sub(s[1:], combo)


get_sub("abcd", "")

print(len(lst))
