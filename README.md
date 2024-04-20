## Encryption Part 1
Lets take a look at the code from line 68-78:
```batch
%dzZdgdRZFXYqUBbsslHpeGIaEjuKgTAzzriIxKRnCpLhdoMZaFuADVnxQZyXJhSMxyQCtsUIuuNOVAWpwvJByaWEeLRylTDuxZKEyjFHKMfihyBqciAoxqnwCmyHBwwA:dzZchdQZFYYpVBbrrlHofGIaFjvKhRAzzqiIyJQmBpLhcoLZaFvADVmxPZyXJhRLxyPCurVIvvNNVAXoxvJByaWDfLQylUDvxZKFyjGIKLgihyBpciAnypnxCl=%"HBVenugtUY%RsrV%rt"
%dzZdgdRZFXYqUBbsslHpeGIaEjuKgTAzzriIxKRnCpLhdoMZaFuADVnxQZyXJhSMxyQCtsUIuuNOVAWpwvJByaWEeLRylTDuxZKEyjFHKMfihyBqciAoxqnwCmyHBwwA:dzZchdQZFYYpVBbrrlHofGIaFjvKhRAzzqiIyJQmBpLhcoLZaFvADVmxPZyXJhRLxyPCurVIvvNNVAXoxvJByaWDfLQylUDvxZKFyjGIKLgihyBpciAnypnxCl=%"kLnxSzhnUx%RsrV%ve"
%dzZdgdRZFXYqUBbsslHpeGIaEjuKgTAzzriIxKRnCpLhdoMZaFuADVnxQZyXJhSMxyQCtsUIuuNOVAWpwvJByaWEeLRylTDuxZKEyjFHKMfihyBqciAoxqnwCmyHBwwA:dzZchdQZFYYpVBbrrlHofGIaFjvKhRAzzqiIyJQmBpLhcoLZaFvADVmxPZyXJhRLxyPCurVIvvNNVAXoxvJByaWDfLQylUDvxZKFyjGIKLgihyBpciAnypnxCl=%"rOhGAKrnyw%RsrV%cw"
%dzZdgdRZFXYqUBbsslHpeGIaEjuKgTAzzriIxKRnCpLhdoMZaFuADVnxQZyXJhSMxyQCtsUIuuNOVAWpwvJByaWEeLRylTDuxZKEyjFHKMfihyBqciAoxqnwCmyHBwwA:dzZchdQZFYYpVBbrrlHofGIaFjvKhRAzzqiIyJQmBpLhcoLZaFvADVmxPZyXJhRLxyPCurVIvvNNVAXoxvJByaWDfLQylUDvxZKFyjGIKLgihyBpciAnypnxCl=%"LncmLYgopF%RsrV%ZO"
%dzZdgdRZFXYqUBbsslHpeGIaEjuKgTAzzriIxKRnCpLhdoMZaFuADVnxQZyXJhSMxyQCtsUIuuNOVAWpwvJByaWEeLRylTDuxZKEyjFHKMfihyBqciAoxqnwCmyHBwwA:dzZchdQZFYYpVBbrrlHofGIaFjvKhRAzzqiIyJQmBpLhcoLZaFvADVmxPZyXJhRLxyPCurVIvvNNVAXoxvJByaWDfLQylUDvxZKFyjGIKLgihyBpciAnypnxCl=%"wGjBvctpXh%RsrV%"h"
%dzZdgdRZFXYqUBbsslHpeGIaEjuKgTAzzriIxKRnCpLhdoMZaFuADVnxQZyXJhSMxyQCtsUIuuNOVAWpwvJByaWEeLRylTDuxZKEyjFHKMfihyBqciAoxqnwCmyHBwwA:dzZchdQZFYYpVBbrrlHofGIaFjvKhRAzzqiIyJQmBpLhcoLZaFvADVmxPZyXJhRLxyPCurVIvvNNVAXoxvJByaWDfLQylUDvxZKFyjGIKLgihyBpciAnypnxCl=%"CpECRUDwpv%RsrV%kP"
%dzZdgdRZFXYqUBbsslHpeGIaEjuKgTAzzriIxKRnCpLhdoMZaFuADVnxQZyXJhSMxyQCtsUIuuNOVAWpwvJByaWEeLRylTDuxZKEyjFHKMfihyBqciAoxqnwCmyHBwwA:dzZchdQZFYYpVBbrrlHofGIaFjvKhRAzzqiIyJQmBpLhcoLZaFvADVmxPZyXJhRLxyPCurVIvvNNVAXoxvJByaWDfLQylUDvxZKFyjGIKLgihyBpciAnypnxCl=%"lvgyvvhsFb%RsrV%""
%dzZdgdRZFXYqUBbsslHpeGIaEjuKgTAzzriIxKRnCpLhdoMZaFuADVnxQZyXJhSMxyQCtsUIuuNOVAWpwvJByaWEeLRylTDuxZKEyjFHKMfihyBqciAoxqnwCmyHBwwA:dzZchdQZFYYpVBbrrlHofGIaFjvKhRAzzqiIyJQmBpLhcoLZaFvADVmxPZyXJhRLxyPCurVIvvNNVAXoxvJByaWDfLQylUDvxZKFyjGIKLgihyBpciAnypnxCl=%"IyDbLKfRAI%RsrV%R="
%dzZdgdRZFXYqUBbsslHpeGIaEjuKgTAzzriIxKRnCpLhdoMZaFuADVnxQZyXJhSMxyQCtsUIuuNOVAWpwvJByaWEeLRylTDuxZKEyjFHKMfihyBqciAoxqnwCmyHBwwA:dzZchdQZFYYpVBbrrlHofGIaFjvKhRAzzqiIyJQmBpLhcoLZaFvADVmxPZyXJhRLxyPCurVIvvNNVAXoxvJByaWDfLQylUDvxZKFyjGIKLgihyBpciAnypnxCl=%"yBCPPSyZau%RsrV%zf"
%dzZdgdRZFXYqUBbsslHpeGIaEjuKgTAzzriIxKRnCpLhdoMZaFuADVnxQZyXJhSMxyQCtsUIuuNOVAWpwvJByaWEeLRylTDuxZKEyjFHKMfihyBqciAoxqnwCmyHBwwA:dzZchdQZFYYpVBbrrlHofGIaFjvKhRAzzqiIyJQmBpLhcoLZaFvADVmxPZyXJhRLxyPCurVIvvNNVAXoxvJByaWDfLQylUDvxZKFyjGIKLgihyBpciAnypnxCl=%"PrRnPbRMUN%RsrV%%MCDk%"
%PrRnPbRMUN%%wGjBvctpXh%%LncmLYgopF%%rOhGAKrnyw%%yBCPPSyZau%%CpECRUDwpv%%IyDbLKfRAI%%kLnxSzhnUx%%HBVenugtUY%%lvgyvvhsFb%
```

This is bloat and can be removed.
```batch
%dzZdgdRZFXYqUBbsslHpeGIaEjuKgTAzzriIxKRnCpLhdoMZaFuADVnxQZyXJhSMxyQCtsUIuuNOVAWpwvJByaWEeLRylTDuxZKEyjFHKMfihyBqciAoxqnwCmyHBwwA:dzZchdQZFYYpVBbrrlHofGIaFjvKhRAzzqiIyJQmBpLhcoLZaFvADVmxPZyXJhRLxyPCurVIvvNNVAXoxvJByaWDfLQylUDvxZKFyjGIKLgihyBpciAnypnxCl=%
```

Also replace this from every line with a space, as it sets theses temporary variables.
- Not sure what is does for now.
```batch
%RsrV%
```

We now end up with:
```batch
"HBVenugtUY%RsrV%rt"
"kLnxSzhnUx%RsrV%ve"
"rOhGAKrnyw%RsrV%cw"
"LncmLYgopF%RsrV%ZO"
"wGjBvctpXh%RsrV%"h"
"CpECRUDwpv%RsrV%kP"
"lvgyvvhsFb%RsrV%""
"IyDbLKfRAI%RsrV%R="
"yBCPPSyZau%RsrV%zf"
"PrRnPbRMUN%RsrV%%MCDk%"
%PrRnPbRMUN%%wGjBvctpXh%%LncmLYgopF%%rOhGAKrnyw%%yBCPPSyZau%%CpECRUDwpv%%IyDbLKfRAI%%kLnxSzhnUx%%HBVenugtUY%%lvgyvvhsFb%
```
HBVenugtUY, kLnxSzhnUx, and so, are variable names for their corresponding text.
The last line assembles the code.

The final code is now:
```batch
%MCDk% hZOcwzfkPR="vert"
```

Thats basically how the encryption works. At line 5062 it assembles all these variables into usable code.